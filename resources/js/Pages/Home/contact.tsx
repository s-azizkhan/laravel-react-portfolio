import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { FaPlaneDeparture } from "react-icons/fa";
import { toast } from "sonner";

export default function Contact() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Message sent successfully");
    };
    return (
        <>
            <section
                id="contact"
                className="w-full py-16 md:py-24 lg:py-32 rounded-t-lg"
            >
                <div className="container mx-auto px-6 md:px-8">
                    <div className="flex flex-col items-center justify-center space-y-6 text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Get in touch with me
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
                            Have a project in mind or just want to say hello?
                            Fill out the form below, and I'll get back to you as
                            soon as possible.
                        </p>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <form
                            className="w-full max-w-lg bg-background p-8 rounded-lg shadow-lg space-y-6"
                            onSubmit={onSubmit}
                        >
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Your message"
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                            </div>
                            <Button className="w-full">
                                Send Message
                                <FaPlaneDeparture className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
