import {
    ClockDashedIcon,
    InboxDownIcon,
    PaperplaneIcon,
} from "@navikt/aksel-icons";
import "@navikt/ds-css";

import { Tabs, Switch, Skeleton } from "@navikt/ds-react";
import { useState } from "react";

const Motion =()=>{
    const [state, setState] = useState("logg");

    return (
        <Tabs value={state} onChange={setState}>
            <Tabs.List>
                <Tabs.Tab
                    value="logg"
                    label="Logg"
                    icon={<ClockDashedIcon title="historielogg" />}
                />
                <Tabs.Tab
                    value="inbox"
                    label="Inbox"
                    icon={<InboxDownIcon title="inbox" />}
                />
                <Tabs.Tab
                    value="sendt"
                    label="Sendt"
                    icon={<PaperplaneIcon title="sendt" />}
                />
            </Tabs.List>
            <Tabs.Panel value="logg" className="h-24 w-full bg-gray-50 p-4">
                Logg-tab
            </Tabs.Panel>
            <Tabs.Panel value="inbox" className="h-24 w-full bg-gray-50 p-4">
                Inbox-tab
                <div className="grid w-48 gap-2">
                    {/* variant="text" kan endre størelse med justering av font-size */}
                    <Skeleton variant="text" width="60%" />

                    {/* For alle andre varianter må width og height brukes */}
                    <Skeleton variant="circle" width={60} height={60} />
                    <Skeleton variant="rectangle" width="100%" height={30} />
                    <Skeleton variant="rounded" width="100%" height={40} />
                </div>
                <div className="grid w-48 gap-2">
                    {/* variant="text" kan endre størelse med justering av font-size */}
                    <Skeleton variant="text" width="60%" />

                    {/* For alle andre varianter må width og height brukes */}
                    <Skeleton variant="circle" width={60} height={60} />
                    <Skeleton variant="rectangle" width="100%" height={30} />
                    <Skeleton variant="rounded" width="100%" height={40} />
                </div>
            </Tabs.Panel>
            <Tabs.Panel value="sendt" className="h-24  w-full bg-gray-50 p-4">
                Sendt-tab
                <Switch>Varsle med SMS</Switch>;
            </Tabs.Panel>
        </Tabs>
    );
}
const Motion1 =()=>{
    return(
        <div className="product-tab">
            <div className="tab-item">
                <ul className="nav" role="tablist">
                    <li>
                        <a className="active" data-toggle="tab" href="#tab-1" role="tab">DESCRIPTION</a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#tab-2" role="tab">SPECIFICATIONS</a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#tab-3" role="tab">Customer Reviews (02)</a>
                    </li>
                </ul>
            </div>
            <div className="tab-item-content">
                <div className="tab-content">
                    <div className="tab-pane fade-in active" id="tab-1" role="tabpanel">
                        <div className="product-content">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h5>Introduction</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                    <h5>Features</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                </div>
                                <div className="col-lg-5">
                                    <img src="img/product-single/tab-desc.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-2" role="tabpanel">
                        <div className="specification-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="p-catagory">Customer Rating</td>
                                        <td>
                                            <div className="pd-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <span>(5)</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-catagory">Price</td>
                                        <td>
                                            <div className="p-price">$495.00</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="tab-3" role="tabpanel">
                        <div className="customer-review-option">
                            <h4>2 Comments</h4>
                            <div className="comment-option">
                                <div className="co-item">
                                    <div className="avatar-pic">
                                        <img src="img/product-single/avatar-1.png" alt="" />
                                    </div>
                                    <div className="avatar-text">
                                        <div className="at-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <h5>Brandon Kelley <span>27 Aug 2019</span></h5>
                                        <div className="at-reply">Nice !</div>
                                    </div>
                                </div>
                                <div className="co-item">
                                    <div className="avatar-pic">
                                        <img src="img/product-single/avatar-2.png" alt="" />
                                    </div>
                                    <div className="avatar-text">
                                        <div className="at-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <h5>Roy Banks <span>27 Aug 2019</span></h5>
                                        <div className="at-reply">Nice !</div>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-rating">
                                <h6>Your Ratind</h6>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                            </div>
                            <div className="leave-comment">
                                <h4>Leave A Comment</h4>
                                <form action="#" className="comment-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Messages"></textarea>
                                            <button type="submit" className="site-btn">Send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Motion