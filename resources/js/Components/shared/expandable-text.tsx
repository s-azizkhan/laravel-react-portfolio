import React, { useState } from "react";

interface ExpandableTextProps {
    text: string;
    maxLength: number;
    className?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
    text,
    maxLength,
    className,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const displayText = isExpanded ? text : text.slice(0, maxLength);
    const shouldTruncate = text.length > maxLength;

    return (
        <div className={`relative ${className}`}>
            <p className="whitespace-pre-line">
                {displayText}
                {!isExpanded && shouldTruncate && "..."}
            </p>
            {shouldTruncate && (
                <button
                    onClick={toggleExpand}
                    className="text-white hover:text-blue-300 underline mt-2 block relative z-10 text-center"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            )}
            {!isExpanded && shouldTruncate && (
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            )}
        </div>
    );
};

export default ExpandableText;
