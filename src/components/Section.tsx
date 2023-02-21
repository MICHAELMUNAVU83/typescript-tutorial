import React , { ReactNode } from 'react';

type SectionProps = {
    title?: string;
    children: ReactNode;

}



function Section({ title="my subheading", children }: SectionProps) {
  return (
      <div>
          <h2>{title}</h2>
            {children}
    </div>
  )
}

export default Section