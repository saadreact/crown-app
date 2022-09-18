import {SpinnerOverlay,SpinnerContainer} from './WithSpinner.styles'; 

export const Spinner = () => {
  return (
        <SpinnerOverlay>
            <SpinnerContainer>
            </SpinnerContainer>
        </SpinnerOverlay>
  )
}
// import React from 'react'

// import {SpinnerOverlay,SpinnerContainer} from './WithSpinner.styles'; 

// const WithSpinner = WrappedComponent => ({isLoading,...otherProps}) => {
//   return (
//     isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer>
//             </SpinnerContainer>
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...otherProps}/>
//     )
//   )
// }

// export default WithSpinner;
