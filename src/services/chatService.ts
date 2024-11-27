
export const createPrivateChat = async (userId: number, name: string, displayName: string) => {
    try {
      const response = await fetch(`http://26.51.47.37/api/v1/chat/private/${userId}/${name}/${displayName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro no servidor: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      
        throw new Error('Erro ao conectar com o servidor.');
    }
};

export const ListContact = async (userId: number) => {
    try {
      const response = await fetch( `http://26.51.47.37/api/v1/chat/list-contact/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro no servidor: ${response.status}`);
      }

      const data = await response.json();
      return data.chat;

    } catch (error) {
      
        throw new Error('Erro ao conectar com o servidor.');
    }
};

export const SearchConversationUse = async (userId: number) => {
  try {
    const response = await fetch( `http://26.51.47.37/api/v1/chat/search/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
     
    });

    if (!response.ok) {
      throw new Error(`Erro no servidor: ${response.status}`);
    }

    const data = await response.json();
    return data.chat;

  } catch (error) {
    
      throw new Error('Erro ao conectar com o servidor.');
  }
};
  


export const SendMessage = async (chatId: number, senderId: number, content: string) => {
  try {
    const response = await fetch( `http://26.51.47.37/api/v1/message/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId, senderId, content }),
    });

    if (!response.ok) {
      throw new Error(`Erro no servidor: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    
      throw new Error('Erro ao conectar com o servidor.');
  }
};
  
export const GetMessages = async (chatId: number) => {
  try {
    const response = await fetch( `http://26.51.47.37/api/v1/message/${chatId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro no servidor: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    
      throw new Error('Erro ao conectar com o servidor.');
  }
};


  
export const GetUnreadMessages = async (userId: number) => {
  try {
    const response = await fetch( `http://26.51.47.37/api/v1/notification/unread/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro no servidor: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    
      throw new Error('Erro ao conectar com o servidor.');
  }
};