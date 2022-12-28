import styled from 'styled-components';

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: -5rem auto 0;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        overflow-y: scroll;

        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    }
`;

type SummaryCardIconColor = 'gray' | 'green' | 'red';

interface SummaryCardProps {
    variant?: 'default' | 'green';
    iconColor?: SummaryCardIconColor;
}

/*eslint-disable*/
export const SummaryCard = styled.div<SummaryCardProps>`
  @media (max-width: 768px) {
    min-width: 17.5rem;
  } 

    padding: 2rem;

    border-radius: 6px;
    background: ${({ theme }) => theme['gray-600']};

    ${({ theme, variant }) =>
        variant === 'green' &&
        `
            background: ${theme['green-700']}; ;
        `}

    header {
        display: flex;
        justify-content: space-between;
        align-content: center;

        color: ${({ theme }) => theme['gray-300']};

      
        svg {
          color: ${({ theme, iconColor }) => {
              const color: Record<SummaryCardIconColor, string> = {
                  green: theme['green-300'],
                  red: theme['red-300'],
                  gray: theme['gray-100'],
              };

              return color[iconColor ?? 'gray'];
          }}
        }
         

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }
`;
/*eslint-enable*/
