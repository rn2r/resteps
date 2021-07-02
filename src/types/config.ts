import React from 'react';
import { StepsBase } from './steps';
import { StepsBooleanInfo } from './info';
import { StepsChildrenProps } from './props';

export interface OnStepConfirmed<StepsHash extends StepsBase> {
  (steps: StepsHash): void;
}

export interface StepsConfig<StepsHash extends StepsBase> {
  children: (args: StepsChildrenProps<StepsHash>) => React.ReactNode;
  initialValues: StepsHash;
  initialActive: keyof StepsHash;
  initialOpen?: StepsBooleanInfo<StepsHash>;
  initialTouched?: StepsBooleanInfo<StepsHash>;
  initialPending?: StepsBooleanInfo<StepsHash>;
  initialConfirmed?: StepsBooleanInfo<StepsHash>;
  onStepConfirmed?: OnStepConfirmed<StepsHash>;
}
