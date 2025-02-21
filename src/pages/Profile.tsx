
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Connected Wallet</h3>
                <p className="text-muted-foreground">Not connected</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Role</h3>
                <p className="text-muted-foreground">User</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Projects</h3>
                <p className="text-muted-foreground">No projects yet</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
