
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Event Feedback Hub</h1>
            <p className="text-sm text-gray-500">Manage your event feedback and grades</p>
          </div>
          <Button className="bg-[#8B5CF6] hover:bg-[#7c4deb]">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
