import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, LayoutAnimation } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../styles/theme';
import WorkflowStepper, { StepStatus } from '../components/WorkflowStepper/WorkflowStepper';

// Demo 1: Live progress
function LiveProgressDemo() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setStep(prev => {
        if (prev >= 4) { clearInterval(t); return prev; }
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(t);
  }, []);
  return <WorkflowStepper currentStep={step} />;
}

// Demo 2: Plan changes mid-flow
function PlanChangeDemo() {
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState(['Plan', 'Build', 'Test', 'Deploy']);
  useEffect(() => {
    const t = setInterval(() => {
      setStep(prev => {
        const next = prev + 1;
        if (next === 2) {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setSteps(['Plan', 'Build', 'Review', 'QA', 'Deploy']);
        }
        if (next > 5) { clearInterval(t); return prev; }
        return next;
      });
    }, 2500);
    return () => clearInterval(t);
  }, []);
  return <WorkflowStepper steps={steps} currentStep={step} />;
}

// Demo 3: Skipped step
function SkippedStepDemo() {
  const [step, setStep] = useState(0);
  const [statuses, setStatuses] = useState<StepStatus[]>([]);
  useEffect(() => {
    const t = setInterval(() => {
      setStep(prev => {
        const next = prev + 1;
        // Skip "Test" (index 2) and jump to Deploy
        if (next === 2) {
          setStatuses(['done', 'done', 'skipped', 'active']);
          clearInterval(t);
          // Continue to Deploy after a beat
          setTimeout(() => {
            setStatuses(['done', 'done', 'skipped', 'done']);
          }, 2500);
          return 3;
        }
        if (next > 3) { clearInterval(t); return prev; }
        return next;
      });
    }, 2500);
    return () => clearInterval(t);
  }, []);
  return <WorkflowStepper currentStep={step} stepStatuses={statuses.length ? statuses : undefined} />;
}

// Demo 4: Cancelled mid-flow
function CancelledDemo() {
  const [step, setStep] = useState(0);
  const [statuses, setStatuses] = useState<StepStatus[]>([]);
  useEffect(() => {
    const t = setInterval(() => {
      setStep(prev => {
        const next = prev + 1;
        // Cancel at "Test" step
        if (next === 2) {
          setStatuses(['done', 'done', 'cancelled', 'pending']);
          clearInterval(t);
          return prev;
        }
        return next;
      });
    }, 2500);
    return () => clearInterval(t);
  }, []);
  return <WorkflowStepper currentStep={step} stepStatuses={statuses.length ? statuses : undefined} />;
}

// Static examples
const staticDemos = [
  { label: 'All Complete', statuses: ['done', 'done', 'done', 'done'] as StepStatus[] },
  { label: 'Step 2 Skipped', statuses: ['done', 'done', 'skipped', 'done'] as StepStatus[] },
  { label: 'Cancelled at Step 3', statuses: ['done', 'done', 'cancelled', 'pending'] as StepStatus[] },
  { label: 'Mixed States', statuses: ['done', 'skipped', 'done', 'cancelled'] as StepStatus[] },
];

export default function WorkflowStepperShowcase() {
  const { isMobile } = useResponsive();

  return (
    <>
      <View style={[styles.section, isMobile && styles.sectionMobile]}>
        <View style={styles.headerRow}>
          <View style={styles.badge}>
            <MaterialIcons name="linear-scale" size={14} color={colors.cyan600} />
            <Text style={styles.badgeText}>WORKFLOW STEPPER</Text>
          </View>
        </View>
        <Text style={[styles.title, isMobile && styles.titleMobile]}>Live Progress Showcase</Text>
        <Text style={styles.desc}>
          A real-time workflow stepper that supports live updates, plan changes, skipped steps, and cancellation — all rendered inside chat bubbles.
        </Text>
      </View>

      {/* Live demos */}
      <View style={styles.grid}>
        <DemoCard title="Live Progress" subtitle="Auto-advances every 2.5s">
          <LiveProgressDemo />
        </DemoCard>
        <DemoCard title="Plan Change" subtitle="Steps change at step 2 (Test → Review + QA)">
          <PlanChangeDemo />
        </DemoCard>
        <DemoCard title="Skipped Step" subtitle="Test is skipped, jumps to Deploy">
          <SkippedStepDemo />
        </DemoCard>
        <DemoCard title="Cancelled" subtitle="Workflow cancelled at Test step">
          <CancelledDemo />
        </DemoCard>
      </View>

      {/* Static state reference */}
      <Text style={styles.sectionLabel}>State Reference</Text>
      <View style={styles.grid}>
        {staticDemos.map(demo => (
          <DemoCard key={demo.label} title={demo.label}>
            <WorkflowStepper stepStatuses={demo.statuses} currentStep={4} />
          </DemoCard>
        ))}
      </View>

      {/* Legend */}
      <View style={styles.legendCard}>
        <Text style={styles.legendTitle}>STEP STATES</Text>
        <View style={styles.legendGrid}>
          {[
            { color: '#34C759', symbol: '✓', label: 'Done' },
            { color: '#007AFF', symbol: '●', label: 'Active (pulsing)' },
            { color: '#D1D1D6', symbol: '○', label: 'Pending' },
            { color: '#FF9500', symbol: '⟩', label: 'Skipped' },
            { color: '#FF3B30', symbol: '✕', label: 'Cancelled' },
          ].map(item => (
            <View key={item.label} style={styles.legendRow}>
              <View style={[styles.legendDot, { backgroundColor: item.color }]}>
                <Text style={styles.legendSymbol}>{item.symbol}</Text>
              </View>
              <Text style={styles.legendLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

function DemoCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 40 },
  sectionMobile: { marginBottom: 24 },
  headerRow: { marginBottom: 16 },
  badge: {
    flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', gap: 6,
    backgroundColor: '#e0f7fa', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20,
  },
  badgeText: { fontSize: 11, fontWeight: 'bold', color: colors.cyan600, letterSpacing: 1 },
  title: { fontSize: 40, fontWeight: 'bold', color: colors.onSurface, marginBottom: 12 },
  titleMobile: { fontSize: 30, marginBottom: 8 },
  desc: { color: colors.outline, fontSize: 15, lineHeight: 22, maxWidth: 640 },
  sectionLabel: { fontSize: 24, fontWeight: '700', color: colors.onSurface, marginTop: 40, marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginBottom: 24 },
  card: {
    minWidth: 260, flex: 1, backgroundColor: colors.surfaceContainerLow,
    padding: 20, borderRadius: 20, gap: 8,
  },
  cardTitle: { fontSize: 14, fontWeight: '700', color: colors.onSurface },
  cardSubtitle: { fontSize: 11, color: colors.outline },
  cardContent: { marginTop: 8 },
  legendCard: {
    backgroundColor: colors.surfaceContainerLow, padding: 24, borderRadius: 20,
    gap: 16, marginBottom: 40,
  },
  legendTitle: { fontSize: 10, fontWeight: '700', letterSpacing: 1.4, color: colors.cyan600 },
  legendGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 20 },
  legendRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendDot: { width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  legendSymbol: { color: '#fff', fontSize: 11, fontWeight: '700' },
  legendLabel: { fontSize: 13, color: colors.onSurface },
});
