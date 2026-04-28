import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const STEPS = ['Plan', 'Build', 'Test', 'Deploy'];
const GREEN = '#34C759';
const BLUE = '#007AFF';
const GREY = '#D1D1D6';

const PulsingDot = () => {
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

const WorkflowStepper = ({ currentStep = 0, steps = STEPS }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      {steps.map((step, i) => {
        const done = i < currentStep;
        const active = i === currentStep;
        return (
          <React.Fragment key={step}>
            {done ? (
              <View style={[styles.dot, { backgroundColor: GREEN }]}>
                <Text style={styles.check}>✓</Text>
              </View>
            ) : active ? (
              <PulsingDot />
            ) : (
              <View style={[styles.dot, { backgroundColor: GREY }]} />
            )}
            {i < steps.length - 1 && (
              <View style={[styles.line, { backgroundColor: done ? GREEN : GREY }]} />
            )}
          </React.Fragment>
        );
      })}
    </View>
    <View style={styles.row}>
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <Text style={[styles.label, i < currentStep && { color: GREEN }, i === currentStep && { color: BLUE, fontWeight: '600' }]}>
            {step}
          </Text>
          {i < steps.length - 1 && <View style={styles.lineSpacer} />}
        </React.Fragment>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { paddingHorizontal: 12, paddingVertical: 10, width: 250 },
  row: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  check: { color: '#fff', fontSize: 11, fontWeight: '700' },
  line: { flex: 1, height: 2, marginHorizontal: 2 },
  lineSpacer: { flex: 1, marginHorizontal: 2 },
  label: { width: 20, fontSize: 9, color: '#8E8E93', textAlign: 'center' },
});

export default WorkflowStepper;
