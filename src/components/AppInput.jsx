export function AppInput ({ label, name, ...rest }) {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input id={name} {...rest} />
    </div>
  )
}
