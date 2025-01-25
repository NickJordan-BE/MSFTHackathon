from openai import OpenAI
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_community.tools.tavily_search import TavilySearchResults
from langgraph.prebuilt import create_react_agent
from langchain_core.messages import HumanMessage

# Load environment variables from .env file
load_dotenv()

search = TavilySearchResults(max_results=2)

# Once we have all the tools we want, we can put them in a list that we will reference later.
tools = [search]

model = ChatOpenAI(model="gpt-4")

#model_with_tools = model.bind_tools(tools)

agent_executor = create_react_agent(model, tools)

def sendChat(messages):
    formatted_messages = []
    for message in messages:
        formatted_messages.append(HumanMessage(content=message))

    response = agent_executor.invoke(
        {"messages": formatted_messages}
    )
    print(response)
    return response["messages"][-1].content