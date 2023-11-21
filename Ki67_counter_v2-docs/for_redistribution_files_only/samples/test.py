#!/usr/bin/env python
"""
Sample script that uses the Ki67_counter_v2 module created using
MATLAB Compiler SDK.

Refer to the MATLAB Compiler SDK documentation for more information.
"""

import Ki67_counter_v2
# Import the matlab module only after you have imported
# MATLAB Compiler SDK generated Python modules.
import matlab

my_Ki67_counter_v2 = Ki67_counter_v2.initialize()

fillIn = "./68.jpg"
output1In = "images/20231119_120625.911-output1.jpg"
output2In = "images/20231119_120625.911-output2.jpg"
my_Ki67_counter_v2.Ki67_counter_v2(fillIn, output1In, output2In, nargout=0)

my_Ki67_counter_v2.terminate()
