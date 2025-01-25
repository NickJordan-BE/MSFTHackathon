from openai import OpenAI
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_community.tools.tavily_search import TavilySearchResults
from langgraph.prebuilt import create_react_agent
from langchain_core.messages import HumanMessage
from langgraph.checkpoint.memory import MemorySaver

# Load environment variables from .env file
load_dotenv()

search = TavilySearchResults(max_results=2)

# Once we have all the tools we want, we can put them in a list that we will reference later.
tools = [search]

model = ChatOpenAI(model="gpt-4")

memory = MemorySaver()

agent_executor = create_react_agent(model, tools, checkpointer=memory)

def sendChat(message, thread_id):
    config = {"configurable": {"thread_id": thread_id}}
    response = agent_executor.invoke(
        {"messages": HumanMessage(content=message)}, config
    )
    print(response)
    return response["messages"][-1].content