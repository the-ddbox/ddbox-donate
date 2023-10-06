import ThemeSelector from '@/components/theme-selector'

const Footer = () => {
  return (
    <footer>
      <div className="container text-center text-xs opacity-70 flex justify-between items-center">
        <div>&copy; 版權宣告</div>
        <div className="flex gap-3 justify-center items-center">
          選擇顏色主題
          <ThemeSelector />
        </div>
      </div>
    </footer>
  )
}

export default Footer
