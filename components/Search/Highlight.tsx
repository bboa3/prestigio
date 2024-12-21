import { Hit as AlgoliaHit } from 'instantsearch.js';
import {
  getHighlightedParts,
  getPropertyByPath,
} from 'instantsearch.js/es/lib/utils';
import React, { Fragment } from 'react';

type HighlightPartProps = {
  children: React.ReactNode;
  isHighlighted: boolean;
};

function HighlightPart({ children, isHighlighted }: HighlightPartProps) {
  return (
    <span
      style={{
        backgroundColor: isHighlighted ? '#A5F3FC' : 'transparent',
        fontWeight: isHighlighted ? 'bold' : 'normal',
        padding: isHighlighted ? '0.1.5rem' : '0',
        borderRadius: isHighlighted ? '0.2rem' : '0'
      }}
    >
      {children}
    </span>
  );
}

type HighlightProps<THit> = {
  hit: THit;
  attribute: keyof THit | string[];
  className?: string;
  separator?: string;
};

export default function Highlight<THit extends AlgoliaHit>({
  hit,
  attribute,
  separator = ', ',
}: HighlightProps<THit>) {
  const { value: attributeValue = '' } =
    getPropertyByPath(hit._highlightResult, attribute as string) || {};
  const parts = getHighlightedParts(attributeValue);

  return (
    <>
      {parts.map((part, partIndex) => {
        if (Array.isArray(part)) {
          const isLastPart = partIndex === parts.length - 1;

          return (
            <Fragment key={partIndex}>
              {part.map((subPart, subPartIndex) => (
                <HighlightPart
                  key={subPartIndex}
                  isHighlighted={subPart.isHighlighted}
                >
                  {subPart.value}
                </HighlightPart>
              ))}

              {!isLastPart && separator}
            </Fragment>
          );
        }

        return (
          <HighlightPart key={partIndex} isHighlighted={part.isHighlighted}>
            {part.value}
          </HighlightPart>
        );
      })}
    </>
  );
}