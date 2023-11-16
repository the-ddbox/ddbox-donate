import ThemeSelector from '@/components/theme-selector'

const Footer = () => {
  return (
    <footer>
      <div className="container text-center text-sm opacity-70 flex justify-between items-center">
        <div>&copy; DDBOX</div>
        <div className="flex gap-3 justify-center items-center">
          顯示
          <ThemeSelector />
        </div>
      </div>
    </footer>
  )
}

export default Footer
