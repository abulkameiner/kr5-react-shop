import { TextField } from '@mui/material';

function FormField({
  label,
  name,
  type = 'text',
  value,
  error,
  onChange,
  placeholder = '',
  as = 'input'
}) {
  const fieldId = `order-${name}`;
  const errorId = `${fieldId}-error`;

  return (
    <TextField
      id={fieldId}
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={Boolean(error)}
      helperText={error || ' '}
      multiline={as === 'textarea'}
      minRows={as === 'textarea' ? 4 : undefined}
      fullWidth
      slotProps={{
        formHelperText: { id: errorId },
        htmlInput: { 'aria-describedby': error ? errorId : undefined }
      }}
    />
  );
}

export default FormField;