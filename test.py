import datetime
from Ki67_counter_v3.for_redistribution_files_only import Ki67_counter_v3


timestamp = datetime.datetime.now()
timestamp_str = timestamp.strftime("%Y%m%d_%H%M%S.%f")[:-3]
output1In = "images/" + timestamp_str + "-output1.jpg"
output2In = "images/" + timestamp_str + "-output2.jpg"
autoContract = "images/" + timestamp_str + "-autoContract .jpg"
myobj = Ki67_counter_v3.initialize_runtime(['-nojvm', '-nodisplay'])
myobj = Ki67_counter_v3.initialize()


result = myobj.Ki67_counter_v3('./Picture3_67.png', output1In, output2In,autoContract)
print(result)