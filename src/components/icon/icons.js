import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false; // এই লাইনটি থাকতেই হবে

library.add(faBars, faUser);
