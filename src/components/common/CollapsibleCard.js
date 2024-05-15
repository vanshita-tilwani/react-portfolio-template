import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

function CollapsibleCard({ className, heading, children, }) {
    const [open, setOpen] = useState(false);

    return (
        <Collapsible.Root className={className} open={open} onOpenChange={setOpen} style={{ minWidth: '750px' }}>
            <div className='d-flex align-items-center justify-content-space-between'>
                <h4 className="text-white">
                    {heading}
                </h4>
                <Collapsible.Trigger asChild>
                    <button className='ms-7'>{open ? <ChevronUpIcon width={35}
                        height={35} /> : <ChevronDownIcon width={35}
                            height={35} />}</button>
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content>
                {children}
            </Collapsible.Content>
        </Collapsible.Root>


    );
};

export default CollapsibleCard;