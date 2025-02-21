
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Coins } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Projects = () => {
  const [fundingAmount, setFundingAmount] = useState("");

  const handleFunding = (projectId: string) => {
    if (!fundingAmount) {
      toast.error("Please enter a funding amount");
      return;
    }
    // Wallet and funding logic will be implemented later
    toast.success("Funding successful!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Renewable Energy Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-green-100">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-black">Solar Farm Project</CardTitle>
                <CardDescription>Community solar installation</CardDescription>
              </div>
              {true && ( // Replace with actual validation status
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <Check className="w-4 h-4 mr-1" />
                  Validated
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                A 5MW solar farm installation to power local communities.
              </p>
              <div className="flex items-center text-sm text-green-600">
                <span className="font-medium">Votes: </span>
                <span className="ml-2">24</span>
              </div>
              <div className="space-y-2">
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={fundingAmount}
                  onChange={(e) => setFundingAmount(e.target.value)}
                />
                <Button
                  onClick={() => handleFunding("1")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Coins className="w-4 h-4 mr-2" />
                  Fund Project
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
