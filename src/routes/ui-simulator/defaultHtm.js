const htmText = `
<Page>
  <H1>Integration Catalog Component Examples:</H1>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">Button</Box>
  </Box>
  <Button action="create-db">Button with action</Button>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">ProjectSwitcher</Box>
  </Box>
  <ProjectSwitcher></ProjectSwitcher>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">Link</Box>
  </Box>
  <Link href="https://zeit.co">Visit ZEIT</Link>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">Select</Box>
  </Box>
  <Select name="dbName" value="selectedValue" action="change-db"><Option value="mongodb" caption="MongoDB" ></Option>
<Option value="redis" caption="Redis" ></Option></Select>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">Input</Box>
  </Box>
  <Input name="dbName" label="Name for the Database" value="the default value"></Input>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">Textarea</Box>
  </Box>
  <Textarea name="description" label="Enter your description">The value</Textarea>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">Checkbox</Box>
  </Box>
  <Checkbox name="allowOptionA" label="Allow Option A" checked="true"></Checkbox>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">Box</Box>
  </Box>
  <Box display="flex" justifyContent="space-between">

    <Input value="db name"/>
    <Button>+Create New</Button>
  </Box>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">P</Box>
  </Box>
  <P>A paragraph.</P>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">H1</Box>
  </Box>
  <H1>A title</H1>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">H2</Box>
  </Box>
  <H2>A secondary title</H2>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">BR</Box>
  </Box>
  <BR></BR>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">B</Box>
  </Box>
  <B>Bold text</B>
  <Box font-style="italic" font-weight="bold">
    <Box background="#e6e4d1" display="inline-block" padding="3px" font-size="150%">Img</Box>
  </Box>
  <Img src="https://cdn-reibjvbyi.now.sh/guided-breathing-screenshot.png"></Img>
</Page>
`
export default htmText