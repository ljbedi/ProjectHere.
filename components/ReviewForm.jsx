// import React from 'react'
// import {SafeAreaView} from 'react-native'
// import {Button, TextInputField} from './components/'
// import {useForm, Controller} from 'react-hook-form'

// const ReviewCard = () => {
//   const {
//     control, 
//     handleSubmit, 
//     formState: {errors, isValid}
//   } = useForm({mode: 'onBlur'})
  
//   const onSubmit = data => console.log(data)
  
// return(
//     <SafeAreaView>
//       <Controller        
//         control={control}        
//         name="name"        
//         render={({field: {onChange, review, onBlur}}) => (            
//           <TextInputField            
//             iconName="person"            
//             iconType="MaterialIcons"            
//             placeholder="Tell us how you felt here."            
//             review={review}            
//             onBlur={onBlur}            
//             onChangeText={review => onChange(review)}          
//           />        
//         )} 
//       />
//       <Button title='Submit' onPress={handleSubmit(onSubmit)}/>
//     </SafeAreaView>
//   )
// }