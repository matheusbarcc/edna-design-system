import { ComponentProps, ElementRef, forwardRef } from 'react'
import { CaretDown } from 'phosphor-react'
import * as Select from '@radix-ui/react-select'
import { SelectInputContent, SelectInputTrigger } from './style'

export interface SelectInputProps extends ComponentProps<typeof Select.Root> {
  css?: any
  placeholder?: string
}

export const SelectInput = forwardRef<
  ElementRef<typeof Select.Root>,
  SelectInputProps
>(({ children, placeholder, css, ...props }: SelectInputProps, ref) => {
  return (
    <Select.Root {...props}>
      <SelectInputTrigger ref={ref} css={css}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <CaretDown size={15} />
        </Select.Icon>
      </SelectInputTrigger>

      <SelectInputContent>{children}</SelectInputContent>
    </Select.Root>
  )
})

SelectInput.displayName = 'Select Input'
