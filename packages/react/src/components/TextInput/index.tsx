import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, Suffix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  suffix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, suffix, css, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer css={css}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
        {!!suffix && <Suffix>{suffix}</Suffix>}
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
