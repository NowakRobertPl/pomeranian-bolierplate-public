import { useEffect } from 'react';
import './TODO.css';
import { useState } from 'react';
import { TickIcon } from '../../../Components/Icons/TickIcon';
import { deleteTodo } from './index';

// wprowadzic folder do route'a!!!

export const ToDoElement = ({ note, author, title, deleteTodo, isError }) => {
  return (
    <div className="proba">
      <div>
        <div className="todo-containers">
          <div>
            <p className="boxpar">{title}</p>
            <p className="name_date">{author}</p>
            <p className="parinfo">{note}</p>
            {isError && <p>Nie dało się usunąć elementu</p>}
            <button
              onClick={() => {
                deleteTodo(id);
              }}
            >
              Usuń dziadostwo!{id}
            </button>
            {/* <div className="lastdiv_div">
              <div>
                <TickIcon />
              </div>{' '}
              <div className="name_date">20.04.2024, 18:06</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
