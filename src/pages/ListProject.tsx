
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Wallet } from "lucide-react";
import { toast } from "sonner";

const ListProject = () => {
  const handleListingFee = () => {
    // Project listing fee payment logic will be implemented with wagmi
    toast.success("Processing listing fee payment...");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">List Your Project</h1>
      
      <Card className="max-w-2xl mx-auto border-green-100 bg-white">
        <CardHeader>
          <CardTitle className="text-black">Create a New Project Listing</CardTitle>
          <CardDescription className="text-gray-600">
            List your renewable energy project for validation and funding
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              To list your project, you'll need to pay a listing fee of X ETH.
              This helps ensure quality projects and prevents spam.
            </p>
            <Button
              onClick={handleListingFee}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Pay Listing Fee
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListProject;
