interface ConatinerProps {
    children: React.ReactNode
}

const Container: React.FC<ConatinerProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}
export default Container