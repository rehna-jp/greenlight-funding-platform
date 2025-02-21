
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Validate = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Validate Projects</h1>
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Project Validation</CardTitle>
            <CardDescription>Review and validate renewable energy projects</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              As a DAO member, you can review and validate new project submissions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Validate;
