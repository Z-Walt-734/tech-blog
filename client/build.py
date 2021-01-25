import glob
import os

blogPath = './src/Pages/Blog'
for filename in glob.glob(os.path.join(blogPath, '*.md')):
    with open(os.path.join(os.getcwd(), filename), 'r') as f:
        print(f);
