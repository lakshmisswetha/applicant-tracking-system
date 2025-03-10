import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

import { TabsContent } from "@/components/ui/tabs";

const Pipeline: React.FC = () => {
    return (
        <TabsContent value="pipeline">
            <div className="flex flex-col w-[50%] font-semibold text-black">
                <div className="shadow-sm p-3 mb-4 flex justify-between">
                    <h1>Application Review</h1>
                    <div className="cursor-pointer">
                        <RiDeleteBin6Line />
                    </div>
                </div>
                <div className="shadow-sm mb-4 p-3 flex justify-between ">
                    Personal Interview
                    <div className="cursor-pointer">
                        <RiDeleteBin6Line />
                    </div>
                </div>
                <div className="shadow-sm mb-4 p-3 flex justify-between">
                    Document Verification
                    <div className="cursor-pointer">
                        <RiDeleteBin6Line />
                    </div>
                </div>
                <div className="shadow-sm mb-4 p-3 flex justify-between">
                    Background Check
                    <div className="cursor-pointer">
                        <RiDeleteBin6Line />
                    </div>
                </div>
                <div className="shadow-sm mb-4 p-3 flex justify-between">
                    Hired
                    <div className="cursor-pointer">
                        <RiDeleteBin6Line />
                    </div>
                </div>
                <div className="mt-6 self-center">
                    <Button variant="outline">+ Add Flow</Button>
                </div>
            </div>
        </TabsContent>
    );
};

export default Pipeline;
