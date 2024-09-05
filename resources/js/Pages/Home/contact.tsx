import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import {
    FaPlaneDeparture,
    FaUser,
    FaEnvelope,
    FaCommentAlt,
} from "react-icons/fa";
import { toast } from "sonner";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/Components/shared/max-width-wrapper";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Message sent successfully", {
            description: "Thank you for reaching out!",
            duration: 5000,
        });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <MaxWidthWrapper className="px-0">
            <section id="contact" className="w-full pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 md:px-8"
                >
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text py-4 text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500">
                            Let's Create Something Amazing
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
                            Ready to turn your ideas into reality? Drop me a
                            message, and let's start building your dream project
                            together!
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-16 flex justify-center"
                    >
                        <form
                            className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-8 border border-white/20"
                            onSubmit={onSubmit}
                        >
                            <div className="space-y-2">
                                <Label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Name
                                </Label>
                                <div className="relative">
                                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <Input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Your Name"
                                        className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-500 text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </Label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <Input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="your@email.com"
                                        className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-500 text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your message here..."
                                    rows={4}
                                    className="w-full px-4 py-2 bg-white/10 border-white/20 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-500 text-white"
                                    required
                                />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-purple-500 via-violet-500 h-12 to-blue-500 hover:bg-gradient-to-l text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                Send Message
                                <FaPlaneDeparture className="ml-2 animate-pulse" />
                            </Button>
                            <p className="text-center text-sm text-gray-400 mt-4">
                                Your information is secure and will never be
                                shared with third parties.
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            </section>
        </MaxWidthWrapper>
    );
}
