import React from 'react';
import StatusBadge from './StatusBadge';

interface StatusIndicatorProps {
  variant?: 'live' | 'pending' | 'creative' | 'processing';
  label?: string;
  animated?: boolean;
}

/**
 * Status Indicator wrapper component
 * Uses the new StatusBadge component with variant styling
 */
export default function StatusIndicator({ 
  variant = 'live', 
  label = 'LIVE',
  animated = true
}: StatusIndicatorProps) {
  return <StatusBadge variant={variant} label={label} animated={animated} />;
}
