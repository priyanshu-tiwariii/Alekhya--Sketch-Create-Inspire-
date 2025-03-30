


const footer = () =>{

    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
               
                <span className="text-lg font-bold text-gray-900">Chitran -</span>
                <p className="text-gray-600 mb-3  text-sm">Sketch. Create. Inspire.</p>
              </div>
              
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Roadmap</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Tutorials</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Blog</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Chitran. All rights reserved.
            </p>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default footer