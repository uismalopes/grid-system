import styled from 'styled-components'

interface PropsColumn {
  xs?: number
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
}

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const mediaColumn = {
  xs: (style: string) => `
    @media (max-width: ${breakpoints.sm - 0.02}px) {
      ${style}
    }
  `,
  sm: (style: string) => {
    return `
    @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 0.02}px) {
      ${style}
    }
  `
  },
  md: (style: string) => `
    @media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 0.02}px) {
      ${style}
    }
  `,
  lg: (style: string) => `
    @media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 0.02}px) {
      ${style}
    }
  `,
  xl: (style: string) => `
    @media (min-width: ${breakpoints.xl}px){
      ${style}
    }
  `,
}

function calcColumn (cols: number) {
  return (100 / (12 / cols))
}

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${breakpoints.md}px) {
    width: 750px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    width: 970px;
  }
  @media (min-width: ${breakpoints.xl}px) {
    width: 1170px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const Col = styled.div<PropsColumn>`
  flex: 1;
  flex-basis: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  ${props => props.xs && mediaColumn.xs(`
    flex-basis: ${calcColumn(props.xs)}%;
    max-width:  ${calcColumn(props.xs)}%;
  `)};
  ${props => props.sm && mediaColumn.sm(`
    flex-basis: ${calcColumn(props.sm)}%;
    max-width:  ${calcColumn(props.sm)}%;
  `)};
  ${props => props.md && mediaColumn.md(`
    flex-basis: ${calcColumn(props.md)}%;
    max-width:  ${calcColumn(props.md)}%;
  `)};
  ${props => props.lg && mediaColumn.lg(`
    flex-basis: ${calcColumn(props.lg)}%;
    max-width:  ${calcColumn(props.lg)}%;
  `)};
  ${props => props.xl && mediaColumn.xl(`
    flex-basis: ${calcColumn(props.xl)}%;
    max-width:  ${calcColumn(props.xl)}%;
  `)};
`