import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";

const Header = () => {
    return ( 
        <div className="mb-8">
        <h1 className="text-center text-3xl mt-4 mb-4 font-semibold tracking-wide">VORES BOLIGHUS</h1>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Navigation />
        <Icon />
        </div>
        </div>
     );
}
 
export default Header;