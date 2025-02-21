import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Wallet } from "lucide-react";
import { toast } from "sonner";

const DAO = () => {
  const handleJoinDAO = () => {
    // DAO membership payment logic will be implemented with wagmi
    toast.success("Processing DAO membership payment...");
  };

  const handleVote = (projectId: string) => {
    // Voting logic will be implemented with wagmi
    toast.success("Vote recorded successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">DAO Membership</h1>
      
      <Card className="mb-8 border-green-100 bg-white">
        <CardHeader>
          <CardTitle className="text-black">Join the GreenStake DAO</CardTitle>
          <CardDescription className="text-gray-600">
            Become a member to participate in project validation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              Join our DAO to help validate renewable energy projects and earn rewards.
              Membership requires a one-time fee of X ETH.
            </p>
            <Button
              onClick={handleJoinDAO}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Pay Membership Fee
            </Button>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-6 text-black">Projects to Validate</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="border-green-100 bg-white">
          <CardHeader>
            <CardTitle className="text-black">Solar Farm Project</CardTitle>
            <CardDescription className="text-gray-600">Community solar installation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium text-black">Project Details</h3>
                <p className="text-gray-600">
                  A 5MW solar farm installation that will provide clean energy to over 1,000 households.
                  The project includes installation of 15,000 solar panels and necessary infrastructure.
                </p>
                <div className="mt-4 space-y-2 text-gray-700">
                  <p><strong>Location:</strong> Sacramento, CA</p>
                  <p><strong>Estimated Impact:</strong> 7,500 tons CO2 reduction/year</p>
                  <p><strong>Timeline:</strong> 18 months</p>
                </div>
              </div>
              <Button
                onClick={() => handleVote("1")}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                Vote to Validate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DAO;
