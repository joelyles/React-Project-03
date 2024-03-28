const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p>created using Dave Gray react course {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer