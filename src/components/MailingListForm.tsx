// export const prerender = false;

import { createSignal } from "solid-js";

export default function MailingListForm({}) {
  const [email, setEmail] = createSignal("");

  const clickHandler = (e: Event) => {
    e.preventDefault();

    const response = fetch("/api/mailing-list-users", {
      method: "POST",
      mode: "cors",
      // credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email(),
      }),
    });
  };

  return (
    <div>
      <label>Email:</label>
      <input
        class="text-black"
        type="email"
        name="email"
        value={email()}
        required
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <button onClick={(e) => clickHandler(e)}>Submit X</button>
      <span>{email()}</span>
    </div>
  );
}
