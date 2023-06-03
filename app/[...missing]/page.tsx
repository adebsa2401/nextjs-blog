import React from "react";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";

const MissingPage = () => redirect('/', RedirectType.replace);

export default MissingPage;
