import { PropsWithChildren } from 'react';
import EducationRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IEducation } from './IEducation';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IEducation.Payload;

export const Education = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="EDUCATION">
      <EducationRow payload={payload} />
    </CommonSection>
  );
}
