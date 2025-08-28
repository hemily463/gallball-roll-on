import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterModal = ({ open, onOpenChange }: NewsletterModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest updates and tips.",
      });
      
      // Auto-close after 2 seconds
      setTimeout(() => {
        onOpenChange(false);
        setIsSubscribed(false);
        setEmail("");
      }, 2000);
    }, 1000);
  };

  const handleClose = () => {
    onOpenChange(false);
    setIsSubscribed(false);
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {isSubscribed ? "Welcome Aboard!" : "Stay in the Loop"}
          </DialogTitle>
        </DialogHeader>

        {isSubscribed ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Thanks for subscribing!</h3>
            <p className="text-muted-foreground">
              You'll receive our newsletter with the latest Gallball updates, productivity tips, and exclusive features.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center momentum-glow">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="text-muted-foreground">
                Get the latest updates, productivity tips, and exclusive features delivered to your inbox.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newsletter-email">Email Address</Label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  disabled={isLoading}
                  className="flex-1"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              By subscribing, you agree to receive emails from Gallball. Unsubscribe at any time.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;