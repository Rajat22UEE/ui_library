export default function Footer() {
    return (
      <footer className="bg-[#0a0909] text-[#FAFAFA] py-1 border-t border-[#27272A] rounded-">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} UI Lib. All rights reserved.
          </p>
          
        </div>
      </footer>
    );
  }
  