import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const GREEN = '#34C759';
const BLUE = '#007AFF';
const GREY = '#D1D1D6';
const ORANGE = '#FF9500';
const RED = '#FF3B30';

export type StepStatus = 'done' | 'active' | 'pending' | 'skipped' | 'cancelled';

export interface WorkflowStepperProps {
  steps?: string[];
  currentStep?: number;
  stepStatuses?: StepStatus[];
}

const PulsingDot: React.FC = () => {
  const scale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.35, duration: 600, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 600, useNativeDriver: true }),
      ])
    ).start();
  }, [scale]);
  return (
    <Animated.View style={[styles.dot, { backgroundColor: BLUE, transform: [{ scale }] }]} />
  );
};

const getStatus = (index: number, currentStep: number, stepStatuses?: StepStatus[]): StepStatus => {
  if (stepStatuses?.[index]) return stepStatuses[index];
  if (index < currentStep) return 'done';
  if (index === currentStep) return 'active';
  return 'pending';
};

const statusConfig: Record<StepStatus, { bg: string; symbol: string; labelColor: string }> = {
  done: { bg: GREEN, symbol: '✓', labelColor: GREEN },
  active: { bg: BLUE, symbol: '', labelColor: BLUE },
  pending: { bg: GREY, symbol: '', labelColor: '#8E8E93' },
  skipped: { bg: ORANGE, symbol: '⟩', labelColor: ORANGE },
  cancelled: { bg: RED, symbol: '✕', labelColor: RED },
};

const WorkflowStepper: React.FC<WorkflowStepperProps> = ({
  currentStep = 0,
  steps = ['Plan', 'Build', 'Test', 'Deploy'],
  stepStatuses,
}) => (
  <View style={styles.container}>
    <View style={styles.row}>
      {steps.map((step, i) => {
        const status = getStatus(i, currentStep, stepStatuses);
        const config = statusConfig[status];
        const prevDone = i > 0 && ['done', 'skipped'].includes(getStatus(i - 1, currentStep, stepStatuses));
        return (
          <React.Fragment key={`${step}-${i}`}>
            {status === 'active' ? (
              <PulsingDot />
            ) : (
              <View style={[styles.dot, { backgroundColor: config.bg }]}>
                {config.symbol ? <Text style={styles.symbol}>{config.symbol}</Text> : null}
              </View>
            )}
            {i < steps.length - 1 && (
              <View style={[styles.line, { backgroundColor: prevDone || status === 'done' ? GREEN : GREY }]} />
            )}
          </React.Fragment>
        );
      })}
    </View>
    <View style={styles.row}>
      {steps.map((step, i) => {
        const status = getStatus(i, currentStep, stepStatuses);
        const config = statusConfig[status];
        return (
          <React.Fragment key={`${step}-${i}`}>
            <Text style={[styles.label, { color: config.labelColor }, status === 'active' && { fontWeight: '600' }]}>
              {step}
            </Text>
            {i < steps.length - 1 && <View style={styles.lineSpacer} />}
          </React.Fragment>
        );
      })}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { paddingHorizontal: 12, paddingVertical: 10, width: 250 },
  row: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  symbol: { color: '#fff', fontSize: 11, fontWeight: '700' },
  line: { flex: 1, height: 2, marginHorizontal: 2 },
  lineSpacer: { flex: 1, marginHorizontal: 2 },
  label: { width: 20, fontSize: 9, textAlign: 'center' },
});

export default WorkflowStepper;
