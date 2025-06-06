

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Neko-Nik Open Source. All rights reserved.
          </p>
          <p className="text-xs mt-1">        
            Made with ❤️ by the Neko-Nik community
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;