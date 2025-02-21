
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { toast } from "sonner";

const Validate = () => {
  const handleVote = (projectId: string) => {
    // Voting logic will be implemented later
    toast.success("Vote recorded successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Validate Projects</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-black">Solar Farm Project</CardTitle>
            <CardDescription>Community solar installation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium text-black">Project Details</h3>
                <p className="text-muted-foreground">
                  A 5MW solar farm installation that will provide clean energy to over 1,000 households.
                  The project includes installation of 15,000 solar panels and necessary infrastructure.
                </p>
                <div className="mt-4 space-y-2">
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

export default Validate;
