import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { FaPlaneDeparture } from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <section
                id="contact"
                className="w-full py-12 md:py-24 lg:py-32 bg-muted rounded-t-lg"
            >
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Get in touch with me
                            </h2>
                            <p className="max-w-[900px] md:text-xl lg:text-base xl:text-xl ">
                                {`Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.`}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto py-12">
                        <form className="max-w-md mx-auto space-y-6 bg-background p-8 rounded-lg shadow-lg">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Your message"
                                />
                            </div>
                            <Button className="w-full text-lg font-semibold flex items-center justify-center">
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
