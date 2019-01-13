import React from 'react';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class Spinner extends React.Component {
  render() {
    return (
      <div className='sweet-loading'>
        <BeatLoader
          css={override}
          sizeUnit={"px"}
          size={30}
          color={'#123abc'}
          loading={this.props.loading}
        />
      </div> 
    )
  }
}
export default Spinner;