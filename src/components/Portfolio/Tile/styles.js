import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ModalWrapper = styled.div`
  margin: 5px 20px 15px;
`

export const ProjectPreview = styled.div`
  background-image: url(${props => props.background});
  background-position: 50% 50%;
  background-size: cover;

  box-shadow: 0 0 1px 2px ${themeGet('colors.secondary')};
  border-radius: 5px;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', 'sans-serif';

  height: 200px;
  width: 300px;

  &:hover {
    box-shadow: 0 0 1px 3px ${themeGet('colors.dark')};
  }
`

export const PreviewTitle = styled.div`
  font-size: 28px;
  color: ${themeGet('colors.primary')};
  text-shadow: -1px 0 ${themeGet('colors.dark')},
    0 1px ${themeGet('colors.dark')}, 1px 0 ${themeGet('colors.dark')},
    0 -1px ${themeGet('colors.dark')};
  text-align: center;

  width: 80%;
`

export const ProjectCloseIcon = styled(FontAwesomeIcon).attrs({
  icon: 'times-circle'
})`
  color: ${themeGet('colors.dark')};
  cursor: pointer;
  font-size: 24px;

  &:hover {
    filter: drop-shadow(0 0 1px ${themeGet('colors.dark')});
  }
`

export const ExpandedDetails = styled.div`
  display: flex;
  flex-direction: column;

  color: ${themeGet('colors.secondary')};
`

export const ExpandedTitle = styled.div`
  font-family: ${themeGet('fonts.serif')};
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin: 5px 0;

  text-align: center;
`

export const LinksHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: center;
  margin: 0 10px 5px;
`

export const ProjectLink = styled.a`
  margin: 5px 0;
`

export const DetailsHolder = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  margin-bottom: 20px;
`

export const TechnologiesHolder = styled.div`
  display: flex;
  flex-flow: row wrap;

  justify-content: center;
  align-items: center;

  margin: 0 10px 5px;
`

export const Technology = styled.div`
  box-shadow: 0 0 1px 2px ${themeGet('colors.dark')};
  border-radius: 10px;

  background-color: ${themeGet('colors.secondary')};
  color: ${themeGet('colors.primary')};

  height: 25px;
  font-size: 16px;
  max-width: 120px;

  margin: 5px 5px;
  padding: 8px 20px 0 20px;
  text-align: center;
`

export const Description = styled.div`
  color: ${themeGet('colors.dark')};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 15px 10px;
`
