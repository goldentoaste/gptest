import re
from lib import wordListToRemove
text = """
Two Republican senators want to open an “investigation” into the recent promotional partnership between Anheuser-Busch's Bud Light brand and social media influencer Dylan Mulvaney.

The ire from Sens Ted Cruz, of Texas, and Marsha Blackburn, of Tennessee, is just the latest outrage from those on the political right in reaction to a recent collaboration between influencer Dylan Mulvaney, a transgender woman, and the light beer brand.
"""

pattern= r"\"|\'|\.|\,|\?|\(|\)"
text = re.sub(pattern, "", text )

x = " ".join([word for word in text.lower().split() if word not in wordListToRemove])
print(x)
print(len(text) - len(x), "chars saved")
