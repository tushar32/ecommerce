
export const checkValidation = (name, value, validationRules) => {
    const errObj = {}
    const numberRegex = /^\d+$/;

     const { required, max, min, exactLength, numberOnly, customValidation } = validationRules
        
        if(required && !value){
            errObj[name] = 'This field is required'
        } else {
            if ( numberOnly ) {
                if(!numberRegex.test(value)) {
                    errObj[name] = `It should be a only numbers`
                }
            } 
            
            else if(exactLength && exactLength !== value.length) {
                errObj[name] = `It should be a number consisting of exactly ${exactLength} digits`
            } 
            
            else if(min && !max && value < min)   {
                errObj[name] = `This field should have atleast ${min} value`
            } 
            else if(!min && max && value >  max)   {
                errObj[name] = `This field should be max ${max} value`
            } 
            
            else if(max && min && (value > max || value < min))   {
                errObj[name] = `This value should be between ${min} and ${max}`
            } else if(customValidation) {
                const message = customValidation(value)
                console.log(message)
                if(message){
                    errObj[name] = message
                } else {
                    errObj[name]= ''
                }

            }
            else {
                errObj[name]= ''
            }

        }

        console.log('errObj', errObj)
        
    return errObj
}
